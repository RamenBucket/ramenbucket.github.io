async function getVOTD() {
    const response = await fetch("https://beta.ourmanna.com/api/v1/get");
    const response_text = await response.text();
    const response_text_split = response_text.split(' - ');

    const text = response_text_split[0] + "<br><i>- " +  response_text_split[1] + "<i>";
    document.getElementById("myText").innerHTML = text;
}