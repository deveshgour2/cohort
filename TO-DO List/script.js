document.addEventListener('DOMContentLoaded', () => {

    const taskInput = document.querySelector('.AddTask input');
    const addButton = document.querySelector('.AddTask button');
    const taskList = document.querySelector('.tasklist');
    const remainingCount = document.querySelector('.remaining');
    const filterTabs = document.querySelectorAll('.left-taskbar p');
    const clearCompletedBtn = document.querySelector('.right-taskbar p');

    let tasks = JSON.parse(localStorage.getItem('engineering_tasks')) 
    
    let currentFilter = 'All';


    function saveTasks() {
        localStorage.setItem('engineering_tasks', JSON.stringify(tasks));
    }


    function updateCounter() {
        const activeTasks = tasks.filter(task => !task.completed).length;
        if (remainingCount) {
            remainingCount.textContent = activeTasks;
        }
    }


    function renderTasks() {
        taskList.innerHTML = '';

        const filteredTasks = tasks.filter(task => {
            if (currentFilter === 'Active') return !task.completed;
            if (currentFilter === 'Completed') return task.completed;
            return true;
        });

        if (filteredTasks.length === 0) {
            taskList.innerHTML = `<p style="color: #64748b; text-align: center; padding: 1rem 0;">No ${currentFilter.toLowerCase()} tasks found.</p>`;
        } else {
            filteredTasks.forEach(task => {
                const taskDiv = document.createElement('div');
                taskDiv.classList.add('task');
                if (task.completed) taskDiv.classList.add('completed');

                taskDiv.innerHTML = `
                    <input type="checkbox" id="status-${task.id}" ${task.completed ? 'checked' : ''}>
                    <p style="${task.completed ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${escapeHTML(task.text)}</p>
                `;

                const checkbox = taskDiv.querySelector('input[type="checkbox"]');
                checkbox.addEventListener('change', () => toggleTask(task.id));

                taskList.appendChild(taskDiv);
            });
        }

        updateCounter();
        saveTasks();
    }

    function addTask() {
        const text = taskInput.value.trim();
        if (text === '') return;

        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };

        tasks.push(newTask);
        taskInput.value = '';
        renderTasks();
    }


    function toggleTask(id) {
        tasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        renderTasks();
    }


    if (clearCompletedBtn) {
        clearCompletedBtn.addEventListener('click', () => {
            tasks = tasks.filter(task => !task.completed);
            renderTasks();
        });
    }


    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.style.fontWeight = 'normal');
            tab.style.fontWeight = 'bold';
            currentFilter = tab.textContent.trim();
            renderTasks();
        });
    });


    if (addButton) addButton.addEventListener('click', addTask);
    if (taskInput) {
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addTask();
        });
    }


    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g,
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }


    filterTabs.forEach(t => {
        if (t.textContent.trim() === 'All') t.style.fontWeight = 'bold';
        t.style.cursor = 'pointer';
    });
    if (clearCompletedBtn) clearCompletedBtn.style.cursor = 'pointer';

    renderTasks();
});