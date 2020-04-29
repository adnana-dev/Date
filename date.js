function validateDate()
{
    var msg_3;
    var date_pas_sure = document.getElementById('DateDeNaissance').value;
    var format = /^(\d{1,2}\/){2}\d{4}$/;
    if(!format.test(date_pas_sure))
    {
        alert('Date non valable !')
        msg_3 = "<p style='color:red'>Date non valable.</p>";
        document.getElementById("msg_3").innerHTML= msg_3; 
        return false;
    }
    else
    {
        var date_temp = date_pas_sure.split('/');
        date_temp[1] -=1;
        var ma_date = new Date();
        ma_date.setFullYear(date_temp[2]);
        ma_date.setMonth(date_temp[1]);
        ma_date.setDate(date_temp[0]);
        if(ma_date.getFullYear()==date_temp[2] && ma_date.getMonth()==date_temp[1] && ma_date.getDate()==date_temp[0])
        {
            alert('Date valable !');
            msg_3 = "<p style='color:green'>Date valable</p>";
            document.getElementById("msg_3").innerHTML= msg_3; 
            return true;
        }
        else
        {
            alert('Date non valable !');
            msg_3 = "<p style='color:red'>Date non valable.</p>";
            document.getElementById("msg_3").innerHTML= msg_3; 
            return false;
        }
    }
}               
