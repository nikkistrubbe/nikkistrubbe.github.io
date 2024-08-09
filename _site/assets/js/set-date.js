// The date is currently printed as yyyy-mm-dd hh:mm:ss +mmmm
// We want to make 'th' a superscript, and change it depending on the day
const els = document.getElementsByClassName("date");
for (i = 0; i < els.length; i++)
{
    // Get element
    el = els[i];

    // Get day, month and year
    date = new Date(el.textContent);
    day = date.getDate();
    month = date.toLocaleString('en-BR', { month: 'long' });
    year = date.getFullYear();

    // Get the ordinal
    switch (day)
    {
        case "1":
        case "21":
        case "31":
            ordinal = 'st';
            break;
        case "2":
        case "22":
            ordinal = 'nd';
            break;
        case "3":
        case "23":
            ordinal = 'rd';
            break;
        default:
            ordinal = 'th';
            break;
    }
    date = day + "<sup>" + ordinal + "</sup> ";
    date += month + ", ";
    date += year;
    el.innerHTML = date;
}
