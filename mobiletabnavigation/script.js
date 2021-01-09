const contents = document.querySelectorAll('.content');
const tabs = document.querySelectorAll('li');

function hideAllContents() {
  contents.forEach((content) => {
    content.classList.remove('show');
  });
}

function hideAllTabs() {
  tabs.forEach((tab) => tab.classList.remove('active'));
}

tabs.forEach((tab, idx) => {
  tab.addEventListener('click', () => {
    hideAllContents();
    hideAllTabs();

    tab.classList.add('active');
    contents[idx].classList.add('show');
  });
});
