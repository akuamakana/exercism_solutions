//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  const key = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  }
  const DNA = [...dna]
  const RNA = []
  if (DNA.length === 0) {
    return ''
  }
  DNA.forEach(nucleotide => {
    RNA.push(key[nucleotide])
  })
  return RNA.join('')
};
