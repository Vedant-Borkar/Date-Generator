function dateGenerator() {
  let ddd=document.getElementById("DD").value;
  let mmm=document.getElementById("MM").value;
  let yyy=document.getElementById("YYYY").value;
    const days = [0,31,28,31,30,31,30,31,31,30,31,30,31];
    var dd=ddd,mm=mmm,yyyy=yyy;
    var d=document.getElementById("days").value;
    var oy = yyyy, od = dd, om = mm;
    let rem = days[mm] - dd;

    if (d > rem) {
        d = d - rem;
        if (mm < 12)
            mm++;
        else {
            mm = 1;
            yyyy++;
        }
        
        if (d > days[mm]) {
            while (d > days[mm]) {
                d = d - days[mm];
                if (mm < 12)
                    mm = mm + 1;
                else {
                    mm = 1;
                    yyyy++;
                }
            }
            dd = d;
        } else {
            dd = d;
        }
    } else {
        dd=dd-d;
        dd=dd+2*d;
    }

    if (yyyy > oy) {
        if (yyyy % 4 == 0) {
            if (yyyy % 400 == 0 || yyyy % 100 != 0) {
                if (mm === 3) {
                    if (dd !== 1) {
                        dd = dd - 1;
                    } else {
                        dd = 29;
                        mm = 2;
                    }
                } else if (mm > 2) {
                    if (dd !== 1) {
                        dd = dd - 1;
                    } else {
                        if (mm !== 1) {
                            dd = days[mm - 1];
                            mm = mm - 1;
                        } else {
                            dd = days[12];
                            mm = 12;
                            yyyy--;
                        }
                    }
                }
            }
        }

        if (oy % 4 == 0) {
            if (oy % 400 == 0 || oy % 100 != 0) {
                if (om <= 2) {
                    if (dd !== 1) {
                        dd = dd - 1;
                    } else {
                        if (mm !== 1) {
                            dd = days[mm - 1];
                            mm = mm - 1;
                        } else {
                            dd = days[12];
                            mm = 12;
                            yyyy--;
                        }
                    }
                }
            }
        }

        let count = 0;

        if (yyyy - oy > 1) {
            while (oy !== yyyy) {
                oy++;
                if (oy % 4 == 0) {
                    if (oy % 400 == 0 || oy % 100 != 0) {
                        count++;
                    }
                }
            }

            if (count > 0) {
                if (dd > count) {
                    dd = dd - count;
                } else {
                    count = count - dd;
                    if (mm !== 1) {
                        dd = days[mm - 1] - count;
                        mm = mm - 1;
                    } else {
                        dd = days[12] - count;
                        mm = 12;
                        yyyy--;
                    }
                }
            }
        }
    } else if (oy % 4 == 0) {
        if ((oy % 100 == 0 && oy % 400 == 0) || (oy % 100 != 0 && oy % 4 == 0)) {
            if (om <= 2) {
                if (mm > 2) {
                    if (dd !== 1) {
                        dd = dd - 1;
                    } else {
                        if (mm !== 1) {
                            dd = days[mm - 1];
                            mm = mm - 1;
                        } else {
                            dd = days[12];
                            mm = 12;
                            yyyy--;
                        }
                    }
                }

                if (yyyy === oy && mm === 2) {
                    if (dd + d === 29) {
                        dd = 29;
                    }
                }
            }
        }
    }

  document.getElementById("FD").value=dd;
  document.getElementById("FM").value=mm;
  document.getElementById("FY").value=yyyy;
}


