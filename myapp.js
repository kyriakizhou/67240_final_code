function myFunction() {
  let input = document.getElementById('myInput')
  let filter = input.value.toUpperCase()
  let lists = document.getElementById('myUL').getElementsByTagName('li')
  // No user input, do not display
  document.getElementById('myUL').style.display = filter.length == 0 ? 'none' : 'block'
  for (list of lists) {
    let listText = list.textContent.toUpperCase()
    // If the input is included in the list text, display it
    list.getElementsByTagName('a')[0].style.display = listText.includes(filter) ? 'block' : 'none'
  }
}