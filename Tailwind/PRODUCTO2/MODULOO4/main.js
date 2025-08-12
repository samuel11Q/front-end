 const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');

        // Función para aplicar el tema
        function applyTheme(theme) {
            if (theme === 'dark') {
                body.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            } else {
                body.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            }
        }

        // Verificar tema al cargar
        function checkTheme() {
            const savedTheme = localStorage.getItem('theme');
            const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
                applyTheme('dark');
            } else {
                applyTheme('light');
            }
        }

        // Cambiar tema al hacer clic
        themeToggle.addEventListener('click', () => {
            const isDark = body.classList.contains('dark');
            applyTheme(isDark ? 'light' : 'dark');
        });

        // Inicializar tema
        checkTheme();