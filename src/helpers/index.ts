export const splitNumberByComma = (value: number) => {
  const splitted = value.toFixed(2).split('.')

  return {
    whole: splitted[0],
    fraction: splitted?.[1] || '00',
  }
}
