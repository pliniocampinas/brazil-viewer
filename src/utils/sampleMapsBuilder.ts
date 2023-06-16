import MapBrowserFormInputs from "@/interfaces/MapBrowserFormInputs"
import { SourceFormat, ValueType } from "@/interfaces/Enums"

export const buildCsvMapParamsSample = (ms: number): MapBrowserFormInputs => {
  return {
    title: 'Mapa Csv PIB',
    sourceUrl: 'https://gist.githubusercontent.com/pliniocampinas/3a0b327dbe7180dd984352e1be4b86e9/raw/4c89ca9aa4d46fbb4630e892613492e8593879b0/pib-municipios-2010-2019.csv',
    sourceFormat: SourceFormat.Csv,
    cityCodeKey: 'codigo_municipio',
    valueKey: 'pib_per_capita_1brl',
    valueType: ValueType.Numeric,
  }
}