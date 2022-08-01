async function getTask() {
  let url = 'http://localhost:8888/api/task';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderTasks() {
  let tasks = await getTask();
  let html = '';
  tasks.forEach(task => {
    let htmlSegment = `
        <tr>
          <td>${task.id}</td>
          <td>${task.taskDetail}</td>
          <td>${task.employeeName}</td>
          <td>${task.taskDeadline}</td>
          <td></td>
        </tr>`;
    html += htmlSegment;
  });

  let container = document.querySelector('tbody');
  container.innerHTML = html;
}

renderTasks();