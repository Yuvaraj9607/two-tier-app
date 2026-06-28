async function loadMenu() {

    const response = await fetch('/menu');
    const menu = await response.json();

    let html = `
        <table>
            <tr>
                <th>ID</th>
                <th>Item Name</th>
                <th>Price</th>
            </tr>
    `;

    menu.forEach(item => {
        html += `
            <tr>
                <td>${item.id}</td>
                <td>${item.item_name}</td>
                <td>₹${item.price}</td>
            </tr>
        `;
    });

    html += `</table>`;

    document.getElementById("out").innerHTML = html;
}