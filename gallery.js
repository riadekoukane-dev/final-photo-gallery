function upDate(previewPic) {
  console.log("upDate called for:", previewPic.alt);
  var displayBox = document.getElementById("image");
  displayBox.style.backgroundImage = "url('" + previewPic.src + "')";
  displayBox.innerHTML = previewPic.alt;
}

function unDo() {
  console.log("unDo called");
  var displayBox = document.getElementById("image");
  displayBox.style.backgroundImage = "url('')";
  displayBox.innerHTML = "Hover over or focus on a photo below to preview it here.";
}

function addTabFocus() {
  console.log("addTabFocus onload event fired");
  var galleryImages = document.querySelectorAll(".photo-card img");
  for (var i = 0; i < galleryImages.length; i++) {
    galleryImages[i].setAttribute("tabindex", "0");
    console.log("Set tabindex on image index:", i);
  }
}
