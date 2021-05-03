function filter(event) {
  const searchInput = document
    .querySelector(".search-input")
    .value.toUpperCase();
  const sidebarItem = document.getElementsByClassName("sidebar-item");

  let sidebarItemTitle = 0;

  if (event.target.classList.contains("search-input"))
    for (let i = 0; i < sidebarItem.length; i++) {
      sidebarItemTitle = sidebarItem[i].getElementsByClassName(
        "sidebar-item-title"
      );

      if (sidebarItemTitle[0].value.toUpperCase().indexOf(searchInput) > -1) {
        sidebarItem[i].style.display = "block";
      } else {
        sidebarItem[i].style.display = "none";
      }
    }
}

document.addEventListener("keyup", filter);
