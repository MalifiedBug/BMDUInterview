export default function Navibar() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-7.75rem";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <div id="navbar" className="z-10 grid grid-cols-4">
      <div className="navbarlogo text-start col-span-1 self-center">
        <p className="text-4xl pl-20">h a l s t e i n</p>
        <p className="text-lg text-right pr-20 text-yellow-700">solutions</p>
      </div>
      <div className="col-span-3 text-left p-2 border-l-2">
        <div className="flex py-1 text-sm">
          <a href="_#" className="px-4 hover:text-zinc-400">
            halstein@example.com
          </a>
          <p>|</p>
          <a href="_#" className="px-4">
            +99 4 11 72 1270
          </a>
          <p>|</p>
          <p className="px-4">Mon-Fri 9am-5pm</p>
        </div>
        <div className="flex justify-between border-t-2">
            <div className="h-20 flex">
              <div className="dropdown m-4">
                <a href="_#" data-toggle="dropdown">
                  HOME <b class="caret"></b>
                </a>
                <ul class="dropdown-menu multi-level">
                  <li>
                    <a href="_#">Level 1</a>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="_#" data-toggle="dropdown">
                      Level 1
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="_#">Level 2</a>
                      </li>
                      <li class="dropdown-submenu">
                        <a href="_#" data-toggle="dropdown">
                          Level 2
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="dropdown m-4">
                <a href="_#" data-toggle="dropdown">
                  PAGES <b class="caret"></b>
                </a>
                <ul class="dropdown-menu multi-level">
                  <li>
                    <a href="_#">Level 1</a>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="_#" data-toggle="dropdown">
                      Level 1
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="_#">Level 2</a>
                      </li>
                      <li class="dropdown-submenu">
                        <a href="_#" data-toggle="dropdown">
                          Level 2
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="dropdown m-4">
                <a href="_#" data-toggle="dropdown">
                  PORTFOLIO <b class="caret"></b>
                </a>
                <ul class="dropdown-menu multi-level">
                  <li>
                    <a href="_#">Level 1</a>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="_#" data-toggle="dropdown">
                      Level 1
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="_#">Level 2</a>
                      </li>
                      <li class="dropdown-submenu">
                        <a href="_#" data-toggle="dropdown">
                          Level 2
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>{" "}
              <div className="dropdown m-4">
                <a href="_#" data-toggle="dropdown">
                  SHOP <b class="caret"></b>
                </a>
                <ul class="dropdown-menu multi-level">
                  <li>
                    <a href="_#">Level 1</a>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="_#" data-toggle="dropdown">
                      Level 1
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="_#">Level 2</a>
                      </li>
                      <li class="dropdown-submenu">
                        <a href="_#" data-toggle="dropdown">
                          Level 2
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              </div>

              <div className="border-l-2 flex"><button class="btn text-black mr-2 border-none text-xl" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Info <h2 className="hover:animate-ping">+</h2></button></div>
              {/* off canvas div */}
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">
            Offcanvas right
          </h5>
          <button
            type="button"
            class="btn-close border rounded-lg pb-3"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            X
          </button>
        </div>
        <div class="offcanvas-body">...</div>
      </div>
              
            
        </div> 
      </div>
  
    </div>

  );
}
