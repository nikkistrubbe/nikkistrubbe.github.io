// Only show the topic specified in the ULR query
// I.e. ?topic=algebraic-topology
document.addEventListener('DOMContentLoaded', function ()
{
    const query = window.location.search;
    urlParams = new URLSearchParams(query);
    const topic = urlParams.get('topic');
    if (topic == null)
        // There is nothing to do
        return;

    // Now, we want to set all elements with class 'post-preview' to display:none,
    // except for the one with topic-algebraic-topology for example
    const els = document.getElementsByClassName("post-preview");
    topic_found = false;
    for (i = 0; i < els.length; i++)
    {
        // Get element
        el = els[i];

        // Check whether we have to make it invisible
        if (el.classList.contains("topic-" + topic))
        {
            // We found the topic
            // Set also the title
            topic_found = true;
            topic_string = topic.replace('-',' ');
            document.getElementById("blog-intro").style.display = "none";
            page_title = document.getElementsByClassName("page-title")[0];
            page_title.textContent = niceCapitalisation("Blogs about " + topic_string);
            page_description = document.getElementsByClassName("page-description")[0];
            page_description.innerHTML = "Or look at <a href='/posts.html'>all blogs</a>"
            break;
        }
    }
    if (!topic_found)
        return;

    for (i = 0; i < els.length; i++)
    {
        // Get element
        el = els[i];

        // Check whether we have to make it invisible
        if (!el.classList.contains("topic-" + topic))
            el.style.display = "none";
    }
});

// Nice capitalisation
// Taking into account prepositions, conjunctions, etc.
function niceCapitalisation(str)
{
    // There are ofcourse more conjunctions and prepositions,
    // but this does certainly suffice
    const exceptions = 
    [
        'a', 'an', 'the', 'nor', 'for', 
        'but', 'or', 'and', 'yet', 'so',
        'about', 'above', 'as', 'at', 'before', 
        'below', 'between', 'by', 'except', 'for', 
        'from', 'in', 'inside', 'into', 'like', 
        'of', 'on', 'onto', 'over', 'per', 
        'since', 'than', 'through', 'to', 'up', 
        'upon', 'via', 'with'
    ];

    str = str.toLowerCase();
    str = str.split(' ');
    if (str.length == 0)
        return "";
    for (i = 0; i < str.length; i++)
    {
        if(!exceptions.includes(str[i]))
            str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    str[0] = str[0][0].toUpperCase() + str[0].substring(1);
    return str.join(' ');
}