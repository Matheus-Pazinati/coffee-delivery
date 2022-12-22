export function filterCep(cep: string) {


  const cepIsANumber = Boolean(Number(cep))
  const cepIsFilled = cep.length === 8

  return cepIsFilled && cepIsANumber
}