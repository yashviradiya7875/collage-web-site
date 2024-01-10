function showContent(id) {
    // Hide all content sections
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
    }
    
    // Show the selected content section
    var content = document.getElementById(id);
    content.style.display = "block";
    
    // Set the active link
    var links = document.getElementsByClassName("navbar")[0].getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
    }
    document.getElementById(id + "-link").classList.add("active");
}