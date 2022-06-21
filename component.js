class Post extends HTMLElement {
  constructor() {
    super();
    this.setAttribute("class", "post");
    this.innerHTML = `
        <div class="image-post-preview">
          <img src="./assets/image/Gambar1.png" alt="post1" class="img-fluid">
        </div>
        <div class="post-preview p-3">
          <h5 class="fw-bold">UAS PKWN</h5>
          <p class="fst-italic text-secondary">diposting oleh IchsanN Februari 17, 2022</p>
          <div class="d-flex justify-content-between text-success"><span><i class="fa-solid fa-message"></i> 0</span> <span><i class="fa-solid fa-share"></i></span></div>
        </div>
    `;
  }
}
customElements.define("post-component", Post);

class SideNavigation extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <div class="p-2">
          <div class="d-flex align-items-center">
            <img class="rounded-circle" src="./assets/profile.jpg" alt="IchsanN">
            <div class="ms-3">
              <h5>IchsanN</h5>
              <p class="mb-1">Manusia</p>
              <a href="#" class="text-decoration-none">Kunjungi Profil</a>
            </div>
          </div>
        </div>
        <hr>
        <div class="p-2">
          <div class="d-flex align-items-center">
            <div class="ms-3">
              <h5 class="mb-1">Total Tayangan</h5>
              <p class="mb-1">1,178</p>
            </div>
          </div>
        </div>
        <hr>
        <div class="p-2">
          <div class="accordion" id="accordionArchive">
            <div class="accordion-item">
              <div class="accordion-header" id="headingArchive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseArchive" aria-expanded="false" aria-controls="collapseArchive">
                  <h5>Archive</h5>
                </button>
              </div>
              <div id="collapseArchive" class="accordion-collapse collapse" aria-labelledby="headingArchive"
                data-bs-parent="#accordionArchive">
                <div class="accordion-body">
                  <a class="d-flex justify-content-between text-decoration-none">
                    <div>Februari 2022</div>
                    <div>(2)</div>
                  </a>
                  <a class="d-flex justify-content-between text-decoration-none">
                    <div>Januari 2022</div>
                    <div>(2)</div>
                  </a>
                  <a class="d-flex justify-content-between text-decoration-none">
                    <div>Desember 2021</div>
                    <div>(1)</div>
                  </a>
                  <a class="d-flex justify-content-between text-decoration-none">
                    <div>November 2021</div>
                    <div>(1)</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="p-2">
          <div class="accordion" id="accordionLabel">
            <div class="accordion-item">
              <div class="accordion-header" id="headingLabel">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseLabel" aria-expanded="false" aria-controls="collapseLabel">
                  <h5>Label</h5>
                </button>
              </div>
              <div id="collapseLabel" class="accordion-collapse collapse" aria-labelledby="headingLabel"
                data-bs-parent="#accordionLabel">
                <div class="accordion-body">
                  <div>
                    <div class="badge bg-success">
                      KULIAH
                    </div>
                    <div class="badge bg-success">
                      PANCASILA
                    </div>
                    <div class="badge bg-success">
                      PKWN
                    </div>
                    <div class="badge bg-success">
                      UAS
                    </div>
                    <div class="badge bg-success">
                      UTS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="p-2">
          <a href="#" class="text-decoration-none">Laporkan Penyalahgunaan</a>
        </div>
      `;
  }
}

customElements.define("side-navigation", SideNavigation);
