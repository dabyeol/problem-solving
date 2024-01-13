function solution(myString, pat) {
  return myString.match(new RegExp(`(?=${pat})`, 'g'))?.length || 0;
}
