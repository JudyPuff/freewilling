document.addEventListener('DOMContentLoaded', showText)

function start () {
    bindEventListeners(document.getElementsByClassName('beneficiary').children);
  }
document.addEventListener('click', showText)
// need to find out how to apply to all bens! -- maybe a loop?

function showText () {
    if (ben1.checked) {
        console.log('ben1 was checked! Huzzah!')
        document.getElementById('field1').classList.toggle('hide')
      }else if(document.getElementById('ben3').checked) {
        document.getElementById('field2').classList.toggle('hide')
      } else if (document.getElementById('ben4').checked) {
        document.getElementById('field3').classList.toggle('hide')
      } else if (document.getElementById('ben5').checked) {
        document.getElementById('field4').classList.toggle('hide')
      }

}