/**
 * This is a copy of color map values in vars/derived-variables sass file
 */
export const colorMapValues = [
  '',
  'white',
  'black',
  'light',
  'dark',
  'primary',
  'info',
  'success',
  'warning',
  'danger',
] as string[]

export const colorMapSemanticValues = [
  'primary',
  'info',
  'success',
  'warning',
  'danger',
] as string[]

export const removeByValue = (
  array: string[],
  value: string[] | string
): string[] => {
  if (Array.isArray(value)) {
    return array.filter((item) => !value.includes(item))
  } else {
    const index = array.indexOf(value)
    if (index !== -1) {
      array.splice(index, 1)
    }
    return array
  }
}

export const colorMapValuesNoLight = removeByValue(colorMapValues, [
  'white',
  'light',
])

// '' means normal or default
export const sizes = ['small', '', 'medium', 'large'] as string[]
