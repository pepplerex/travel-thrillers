import React from "react";

const RowCard = () => {
  return (
    <div className="row-card">
      <div className="row">
        <div className="col-md-8">
          <div className="rw-card">
            <div className="card">
              <div className="card-body rw-cnt">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0PDQ0NDQ8ODQ0NFhEWFhYRFRYYHSogGBolHRYVJTIhJi0tLjouFyA/ODUsOCgtLy0BCgoKDg0OGxAQGy0lICUwLTUtLy0wLS03Ly8tLy8tLy0tNTUtLS0vLS0uNi0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHBAMBAv/EAE4QAAEDAgMFAwUJCwoHAAAAAAEAAgMEEQUSIQYTMUFhB1FxFCIygZE0NVJUc6Gxs9EVFyMzQkNicnTBwhYlRFOSk6Oyw9J1goOitOHx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EAC4RAAICAQMCBAUFAAMAAAAAAAABAhEDBBIhMUETUWGhBSIycYGRscHR8BRCcv/aAAwDAQACEQMRAD8A3FERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREARFD7V77yCp8nLhKI7jJ6eQEZ8vXLmXG6VkoR3SUbq2SUEzJBmY5r2hzm3aQRmaSCPEEEepeyzLs72g3UnkUv4uV94nf1cptZvg63t8VYtstp/IWiGEB1TI3MCR5sTDoHEczobDpr1gssXHcbc3w7LDUeBFW30fmvP8dyxCriMpgD2mVrA90Y1c1hNgT3X6rpUbhFC2miDLl0jrPmldq+WY+k5x5/uFlJKaMUtt/L0CIi6RCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgC48Qr4aaN0s8jY2N4k8z3AcSegX7lqomPZG6RjHyEiNjnhrpCOTQePqVH7TYpTLRus404u0n8hspcOPUjh4FQnLbG0adHp1nzRxydJ37X09SXq9so4GtfJR1rY3/i3viY1rx0u7TwOq98F2woqx4ja98UrjZrJw1uc9zSCQT0vdTdZSxTRuilY2SN4s5jhcELINocGFPNM6lMk1NE9rJJMpLYpT+aLuDiNNeoB1VeSU4c9UbdHg0uqTg04y7O7Xv39O/byLlsls7TksrnAukElQGtJvGHtneBIB32AHdpfiqnt28uxSpub5TC0dBumG3zlW3s3xffU7qVwAfTWLCBYPhcT84N/aFUNuPfWp/Xh+qYq514So36LxF8QnHJ1Sdfa1VehsQX1fBwX1az5oIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiICA2yaBR738unnppYnc2vEzBp6iR61LVVPFOx8MjWvY9tnsOuh4Hpw0PRRW2hth05PAOp3E9zRPGSVXO0GkrN/FUUwnMbqcRPdAX3uHudZwZrYh3hxVU5bbdeX8m/T4fGUIbtvMqb86jx/u5YK+slqpXUVI8sazSrq267kc4oz/Wnv5eKk6fDII4BStiaIMhYYyLhzTxv3k8ysjppsVhYI4TWxtF7MjbM1oJ46ALoiq8be4Ma/ES5xt/SBr4nQKtZubadm+fwqW1Rjkior16vzf8AC7L8t2rZzBfIMYniaSYn0ckkRJuchljGU9QQfmVc2mpH1GNywsF3SSU7Qe4btlz4AXPqVywrD5aGIzzCetxCYNj9J0gYL3Eec6NYDqXH7Ao3E6qLCM9RJlqMUq8zybHJEDyHMMBAA5m3TRKHy0+FdnMGpm9Q5we+TjtXq1XzeiVXb6/rV13zM27zNz5c2TMM+W9s1uNuq9lF4Ph4p2FzyZKiXK+omdq+R9uA7mjgGjQBQm0G2kEEbfJrVMj42yNyk7pjDwL7a3/R9tle5JK2eTj088s9mJX/AL2X3LeiqOxe082IOmZOxgdG1r2uia5rS0kixBJ1VuSMlJWjmfBPBkeOfVBERSKQiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAg5p21hrsPlY6Jwi0cSHNkikBDZG+BHDvCpFPtZiGHg0c8UcjoPMG9D84aOGoPnNtwPcrsPfl3/DGf+Q5eG1TsLG5Fe1jnPIbGQDvWtvq4luoYFTJNq06Z6mnnjjLwp498ZJOldp1y1/K/oq/3yan4vB7ZPtT75FT8Xg/xFOYhs5glPAaiWK0QAIcJ5TnvwDfO1JXyl2cwWan8phgMkeRztJpgbgXLSM2h6KFZem41LN8N27vBlV1dPr5fWQn3yan4vB/iKsY3islbUOqJAGuIY0Nbcta1otYX9Z9a0PCtmsGq4hNBCS13Eb6YOY7m1wzaEKhbT0UVNXzwQjLFG5gY0uc4gGNrjqdeJKryKe227Ru0E9I8zjixuMknd/dJr6mXjAsaxHEw4MjipYB5slQGvLx+jGHaZupuAqzsrilVQ1ElHuHTiR5ZJTWs7eDS4J5W430srbtVXOwynozShsbGTBm6/Nvj3ZJafpvxurBhdVFUwxVUYFpo2uBIGYD4JPQ6epXbbl9XKPKeeMMUn4S8OfCVvhxur73+no+pG7K4A2hZITbezuzPDfQibraJveBc681YERXJJKkeXkySySc5u2wiIukAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiArc9S2PHI2u032HZGHveJnOt7AVXNv8AZ+UzNq4d5KJnsjew3e+OQ6Nyj4J7uR8dJXtDwuR8UNZBmElISXFnpCMkHOP1SL+BK5ME7QIyxrK1jmSAAb2NuZr+paNWnwuPBZ57bcJceR7WmjmjGGp063Utso9+Peqrpyc2JbJ1H3LhJkc6elbI8w5i6MRk5ixv6QHPxHcu3YPBamKmqHSksbVMAjjcTcaEbwjle462Hgpb+W+FfGT/AHM3+1P5b4X8ZP8Aczf7V1LGpXf+6EJ5NfPDLE8b5d/S/O6XFdfz2K/2f0tRS1tXSzNLCIQ9zeLSRIA17e8EE6/Yq9tuL4rUgcS+L27tq0XCZvKpn14YY4Nw2GB0gyukaHF7pSOTb2Av3E81AUGB/dDE5sQd7jbM10N/6Q6MNAc39C7b35+1QlC4KK8/Y04NZWqyajJw9iT/APXHH3dfj8FqxzCIa6B0MoseMcg9KKS2jh9i5tjYjHh8EbrZozOw24XbO8G3sX52px5mH05IINRIC2BnPN8Mj4I+wL7sSHDDaXNclzXuueJzSOdf51d8u/jrR5dZP+H830uSr71K6/YnkRFYYwiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIihdp6uppqV9RTbouh86RsjHOvFzIs4WI4+AK43SsnCDnJRXcmkWZUe3OKTyNihgpZJHXysEUgJsLm15O4FSZxvaAccPiI6RP/dKq1mi+if6G6fwvNB1KUE/WSRekVdwLaB87zBVU8lJUZS5rXscGStHEsJHEdysSsTTVoxZcUsctsuv4f7cBERdKz4RfRUzGdgaeZxkp3mmc43LMueG/QaFvtt0V0RRlFS4Zdg1GXBLdjlX+7ma/e2m+NRf2Hrro9gmU95p3OrCwZm00TQwSEciXHXw0XljtXjDcUDIN9u88e5YxjjA+PS+Y2sdb3J4dNFoaqhjg2+Oh6eo1urhCLeRNSV8Va9HSTRQMQ2zopWbiamq2xteBJECyMOy/m3i98ve32r81faKwR5aWls4Czd8W5GDl5rTr4XCsONbKUlbIJZA9klrOfC5rTIOWa4INu/iuSDYHDmG7t/IPgvkaG/8AYAUcct9Ucx5fh2xb4y47dr/VFEoKSsxisLnuc4kgyykfg4o+nIc7N/8AZWwUtOyKOOJgsyNjWMHc1osF+aOjigYI4Y2RMHBrGho8epXSp48ez7mXXa16lpJbYx6L/f5BF8UbheKx1TpxF5zIJBGZAQWvda5y94HC6ssxqLabS4RJoiIRCIiAIiIAiIgCIiAIiIAiIgCIiAKO2h9w137JU/VOUio/H/cNb+y1H1TlGXRk8X1x+6Mg2arGU9dBNI6zGPcXuAc6wLXDgNTxWp0O1OH1LxHHUtzONmh7ZIsx7hnAueiy7ZaBkuIU0crGvY+Rwcx4Ba4WcbELVnbN4eRbyKmHhC1p9o1WfBu28Ue/8a8DxV4m69vFVXV9e/uiUc0G1xw1HeDa1x3cVmWJbQ1tDiUsXlEk0EcouyTK4OidZ2W9r3Ada/RaXEwMa1ovZoAGYlxsO8nU+Kx/bv3zq/GL6pinnbSTRk+DYoZM0oTSacfL1S48uG+hYMbrsama6rgbJBRtzOjawtbKYeUjh6Wo1t83NeOz221UQ+CZhqpXMcKYho3j5uTXW0LevT2aC73Ofkf4FkuwfvnS+Mv1T1GalCSp9S/SSxajTZFLHFbFarh9H1fXty77ndjNfjtI5ss8kkYefNyljog7jks24HgfnVw2Mx5+IU796AJonBjyzQPaRcPHcePsXn2kD+bXfLR/SVE9lXo1vjTf6i6rjk23wRy+Hn0DzOEYyi6+VV5f37EXWbRV1FiEkRqZJooqjLkks4PizXsdOOU8e9W/bqWaGjNRBNJC+J8d8hHntc7LYg9SD6lnm2HvnV/LfwhaL2g+9dT4wfXMUYN1NFmoxwWTTSUVcqvhc/T1XTuyq4PtViM1O+njDqisL27qTI1xZFY53O4N0IFifhdFN7KzYqypfDiAfkdA+RjiGOAc1zRYPZpwcdD3KJ7KQN5WHmGQgHoS77AtAqqmOFjpZXtZGwXc9xsAFPEm4qTZn+IzhiyzwQxx5rmubaX0+X2S8ypx0eOVcYmNZHSZxmZTtZazTwzG1x8/7lybLbU1Jq/IK0te7O+JsgADmytJ8020INiL2XeNp6ite6HDILgGz6qo82KMHnYfMDr0VI2ZLjitOXOLnGp85x4udc3PrKg5U1tbNOLA8mLKs0Iqo2kkk1w2rrn9W33Lf2hy1kVPmbNGynfIIjGxrhI+7HHzn34ebwAHHmoLYzDq6eGZ1JWeTBrwHssSJHZBY35Kydp/uGP9qZ9VIvDss9zVPy7f8gXZK81EMOR4/hrnFK93kn372ufye+PbRS4bS00Ly2WvfC3O4nMxpAsZDwvcg2GnPuXG6DFPuea92ISCURb8QBrWx7riAdONteHTqqttxUOkxKpJ/IcGNHc1jALe259as+0uMiaBuGUDXTyPaxkhibnY1gt5gI05C54AXXN9uVvp0JrSvHDFsirl8020mkuHXNpKn+Tu2R2pdU09SakDeUke8e9gsJIspN7cneafaFCUGLYni9U6OGpFIxrDJlZpkYHActXnzhzA8FY9ltmBSUsrJrOmqm5Z8p0ZHlIEYPP0na956KgYjh1bhNSHAyMyvO5qGDzJG/Re3FpSTmox3fkaaGmyZsyw1f8A0tWvWl9/Y0LCYcSpqhkVRM2rppGPtNkyyRyAAhp6HXjfhyVmVP2R2vFa4QThsdRYlrm/i5gONhydbl/8VwV+Nprg8jVwyQy1kik/RJJ+vHH6BERTMoREQBERAEREAREQBR+Pe4q39lqPq3KQXlNE2RjmOF2va5rh3tIsQuNWqJRltkmYxsnK2PEaV7yGtEwBJNgLgtHzkLad43vHtCpJ7OIOVVNbkCxhX5+9tT/Gpf7DFnxrJBVXue3r82j1c1PxGqVfTfe/Mt82IQRvjjdKwSSENZHmBe49Bx9ayXbr3zq/1o/qmK/YDsZTUUwnD5JpG33ZeGtay4sSABxsT7V8x3YyCtndUOllie9rQ8MawtcQLB2o42sPUpZIznHoVaDUafS6hyUm47auq5tPpfTj+SwHWDTnD/Csj2DP86UnjJ9U9avhlGaeCOAyOl3bQ0PeBmLBwBtxsNLqtQ7BQRTNmhqZ43MeHxgNjOSzrgcNRyXckJScWuxXodTixY82Ob+pUnX3X8nV2ke9rvlovpKh+yg6Vo/Sg/1FccYw1lZTyU8pIDw3zm6FrgQQ4X6hROz+yraCXexVMrg5uWSNzWZXDlw4EH6Sjg/EUuxzFqca0M8DdSbte39Mz3bH3zq/lv4QtG7QPeup/wCh9cxc2NbE09ZUOqDNLG59s7WhpaXAAX14aAKVfhAkojRTSOkBjEe9sBJYei7uuLD2Lkcclu9S7NrcUlp5Jv5KtV5V08+hTuyk/hKz9SH6XLp7VJZBHSMF9258zpO7O0Ny39TnKVwLZBlDMJoqmV3mlr2FjMsjDyNuoBupfGsIhrodzODlvma5ps9j/hNPrKKD8PaRyazEtetQuY8ftXt1I3YRsTMNgcwt87O+V2n4zMb38AAPABZ5s2R91ac3FjUCx5G7tFd6DYOmidd09RLHe5hLgyN/6+X0l+ZdhIN+Z4qiaF28MjGsDMsTs2YZbjQA8FGUJtR46F2LV6bHPNc296fO197/AF6+x97T/cMf7Uz6qVc/ZX7nqfl2f5ArLjeEMraY08r3DVjt4wAOD2/lAHTv06rg2d2Ybh73OiqJXNkaBJG9rA1xHB2nAjX2qbg/E3djJDU4/wDgywN/Nd9PsUftCw10Fc+Wx3dSBIx3LOAA5vjcX/5leNh30zqGI07WNcGtFQ1vpb4DUu5m/EX5EKWxLDoKqIxTxiRh1sdCD8IEag9Qqyzs/p2uLoqqqjB5NLA4DuzALmxxm5LuWS1eLUaaOHLJxcejq0+ysssuJwtdM0vBdTxb6ZrdSyPzrX6+adF+5mwVEJziOWCRlzms6JzLXv3W6qOwrZqlpY5o2iR/lLcs7pXkvkbYi2lrekeHeoybYOnLSyOpq44ibmLeNdH6gR9N1Zc/IxqGnba3tdKe3r72uen7opeDUwOMRtpSXRMrS6N3H8AyS5N+7KOPXqtjUPgmz9NQg7lhL3Cz5ZDmkcO6/IdBZTCjig4Lkt+IatamacbpKuer9WERFaYAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgPiIiA//9k="
                          alt=""
                        />
                      </td>
                      <td>
                        <h6>JFK</h6>
                        <p>13:00</p>
                      </td>
                      <td className="ne">
                        <h6>EMIRATES</h6>
                        <p>11H 20M</p>
                        <p>NON-STOP</p>
                      </td>
                      <td>
                        <h6>BOM</h6>
                        <p>14:20</p>
                      </td>
                      <td>
                        <h6>$1,572</h6>
                        <button className="btn btn-sm btn-primary">
                          Book Now
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card">
              <div className="card-body rw-cnt">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="https://e7.pngegg.com/pngimages/235/237/png-clipart-doha-logo-qatar-airways-flight-airline-travel-text-logo.png"
                          alt=""
                        />
                      </td>
                      <td>
                        <h6>JFK</h6>
                        <p>13:00</p>
                      </td>
                      <td className="ne">
                        <h6>Quatar airways</h6>
                        <p>11H 20M</p>
                        <p>NON-STOP</p>
                      </td>
                      <td>
                        <h6>BOM</h6>
                        <p>14:20</p>
                      </td>
                      <td>
                        <h6>$2,072</h6>
                        <button className="btn btn-sm btn-primary">
                          Book Now
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card">
              <div className="card-body rw-cnt">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="https://s.pilotsglobal.com/img/3/b/b/0/8/3bb08d41b60054cc4ed5b4bada0a7e1b.svg"
                          alt=""
                        />
                      </td>
                      <td>
                        <h6>JFK</h6>
                        <p>13:00</p>
                      </td>
                      <td className="ne">
                        <h6>lufthansa</h6>
                        <p>11H 20M</p>
                        <p>NON-STOP</p>
                      </td>
                      <td>
                        <h6>BOM</h6>
                        <p>14:20</p>
                      </td>
                      <td>
                        <h6>$1,872</h6>
                        <button className="btn btn-sm btn-primary">
                          Book Now
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card">
              <div className="card-body rw-cnt">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="data:image/jpeg;base64,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"
                          alt=""
                        />
                      </td>
                      <td>
                        <h6>JFK</h6>
                        <p>13:00</p>
                      </td>
                      <td className="ne">
                        <h6>EMIRATES</h6>
                        <p>11H 20M</p>
                        <p>NON-STOP</p>
                      </td>
                      <td>
                        <h6>BOM</h6>
                        <p>14:20</p>
                      </td>
                      <td>
                        <h6>$1,572</h6>
                        <button className="btn btn-sm btn-primary">
                          Book Now
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="des-card">
            <div className="txt-rw">
              <span>
                <p>From</p>
                <h6>JFK</h6>
              </span>
              <span>
                <p>NON-STOP</p>
              </span>
              <span>
                <p>to</p>
                <h6>BOM</h6>
              </span>
            </div>
            <img src="/img/t2.png" alt="travel-img" />
            <div className="txt2-rw">
              <h6>NON STOP</h6>
              <h6>ONE STOP</h6>
              <h6>MORE ONE STOP</h6>
            </div>

            <div className="txt2-rw">
              <h6>Price</h6>
              <div>
                <input type="range" className="form-range" id="customRange1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowCard;
