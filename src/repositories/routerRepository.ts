import { csvParse } from "d3";
import { fetchData as fetchExampleData } from '@/repositories/StaticMunicipalityRepository'
import MunicipalitiesData from '@/interfaces/MunicipalitiesData';

export interface fetchDataParams {
  sourceFormat: string
  sourceUrl: string
  valueKey: string
  cityCodeKey: string
}

export const fetchData = async (params: fetchDataParams | null = null): Promise<MunicipalitiesData[]> => {
  if(!params) {
    return await fetchExampleData()
  }

  if(params.sourceFormat === 'csv') {
    return await fetchCsvData(params.sourceUrl, params.valueKey, params.cityCodeKey)
  }

  return await fetchExampleData()
}

const fetchCsvData = async (csvUrl: string, valueKey: string, cityCodeKey: string): Promise<MunicipalitiesData[]> => {
  // const csvUrl = 'https://gist.githubusercontent.com/pliniocampinas/3a0b327dbe7180dd984352e1be4b86e9/raw/4c89ca9aa4d46fbb4630e892613492e8593879b0/pib-municipios-2010-2019.csv'
  const response = await fetch(csvUrl)
    .then(response => response.text())
    .then(v => csvParse(v)) 

  return response.map(rows => {
    return {
      code: rows[cityCodeKey] + '',
      mainValue: parseInt(rows[valueKey]?? '0'),
    }
  })
}