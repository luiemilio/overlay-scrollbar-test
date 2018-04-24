//event listeners.
document.addEventListener("DOMContentLoaded", () => {
  if (typeof fin != "undefined") {
    fin.desktop.main(onMain);
  } else {
    ofVersion.innerText =
      "OpenFin is not available - you are probably running in a browser.";
  }
});

//Once the DOM has loaded and the OpenFin API is ready
function onMain() {
  const app = fin.desktop.Application.getCurrent();

  fin.desktop.System.showDeveloperTools(app.uuid, app.uuid);

  fin.desktop.System.getVersion(version => {
    const ofVersion = document.querySelector("#of-version");
    ofVersion.innerText = version;
  });

  const childWindowBtn = document.querySelector("#open-win");

  childWindowBtn.addEventListener("click", () => {
    const child = new fin.desktop.Window(
      {
        url: "http://google.com",
        name: "Child Window" + Math.random() * 100,
        defaultHeight: 400,
        defaultWidth: 400
      },
      () => child.show()
    );
  });
}
