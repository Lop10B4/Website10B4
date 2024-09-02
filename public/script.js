document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('teachers-table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
        const nameA = a.querySelector('td:nth-child(2)').textContent.trim().toLowerCase();
        const nameB = b.querySelector('td:nth-child(2)').textContent.trim().toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

    rows.forEach(row => tbody.appendChild(row));
});
