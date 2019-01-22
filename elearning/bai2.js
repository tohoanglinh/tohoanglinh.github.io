//bai2.js

function dapan(cauhoi)
{
    var radios = document.getElementsByName(cauhoi);

    for (var i = 0, length = radios.length; i < length; i++)
    {
        if (radios[i].checked)
        {
            break;
        }
    }

    return radios[i].value;
}

function ketqua()
{
    var tongSoCauHoi = 3;
    var soCauDung = 0;

    if (dapan('cau1') == 'maison')
    {
        soCauDung += 1;
    }

    if (dapan('cau2') == 'maison')
    {
        soCauDung += 1;
    }

    if (dapan('cau3') == 'renard')
    {
        soCauDung += 1;
    }

    alert("Bạn trả lời đúng: "+soCauDung+"/"+tongSoCauHoi);
}