
          AOS.init({ duration: 900, once: true });

          // Optional: support deep-linking to tabs via hash
          const hash = window.location.hash;
          if (hash) {
            const trigger = document.querySelector(`[data-bs-target="${hash}"]`);
            if (trigger) new bootstrap.Tab(trigger).show();
          }
          document.querySelectorAll('button[data-bs-toggle="tab"]').forEach(btn => {
            btn.addEventListener('shown.bs.tab', e => {
              const target = e.target.getAttribute('data-bs-target');
              history.replaceState(null, '', target);
            });
          });