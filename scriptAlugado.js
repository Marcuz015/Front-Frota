    const carrosAlugados = [
      {
        id: 4,
        modelo: 'Volkswagen Gol',
        ano: '2020',
        placa: 'JKL-1111',
        status: 'Alugado'
      },
      {
        id: 5,
        modelo: 'Hyundai HB20',
        ano: '2022',
        placa: 'MNO-2222',
        status: 'Alugado'
      },
      {
        id: 6,
        modelo: 'Toyota Yaris',
        ano: '2021',
        placa: 'PRS-3333',
        status: 'Alugado'
      }
    ];

    const tabela = document.getElementById("alugadosTable");

    carrosAlugados.forEach((carro, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td class="py-2">${carro.id}</td>
        <td class="py-2">${carro.modelo}</td>
        <td class="py-2">${carro.ano}</td>
        <td class="py-2">${carro.placa}</td>
        <td class="py-2 text-red-400 font-semibold" id="status-${index}">${carro.status}</td>
        <td class="py-2">
          <div class="relative">
            <button 
              class="p-1 hover:bg-gray-800 rounded-full"
              onclick="toggleDropdown(${index}, event)"
              aria-haspopup="true"
              aria-expanded="false">
              <i data-lucide="more-horizontal" class="w-5 h-5 text-gray-400"></i>
            </button>
            <div 
              id="dropdown-${index}"
              class="hidden absolute right-0 z-50 mt-1 w-32 bg-gray-900 border border-gray-700 rounded-lg shadow-lg dropdown-menu">
              <ul class="py-1 max-h-60 overflow-y-auto">
                <li>
                  <button 
                    onclick="encerrarAluguel(${index})"
                    class="w-full px-4 py-2 text-left text-sm hover:bg-gray-800 text-white">
                    Encerrar Aluguel
                  </button>
                </li>
                <li>
                  <button 
                    class="w-full px-4 py-2 text-left text-sm hover:bg-gray-800 text-white">
                    Editar
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </td>
      `;
      tabela.appendChild(row);
    });

    function toggleDropdown(index, event) {
      event.stopPropagation();
      const dropdown = document.getElementById(`dropdown-${index}`);
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();

      // Fechar todos os dropdowns
      closeDropdowns();

      // Calcular posição vertical
      const dropdownHeight = dropdown.offsetHeight;
      const spaceBelow = window.innerHeight - rect.bottom;
      const opensUpwards = spaceBelow < dropdownHeight;

      // Ajustar posição
      dropdown.style.position = 'fixed';
      dropdown.style.left = `${rect.left + window.scrollX}px`;

      if (opensUpwards) {
        dropdown.style.top = `${rect.top + window.scrollY - dropdownHeight - 4}px`;
      } else {
        dropdown.style.top = `${rect.top + window.scrollY + rect.height + 4}px`;
      }

      dropdown.classList.toggle('hidden');
    }

    function encerrarAluguel(index) {
      const statusCell = document.getElementById(`status-${index}`);
      statusCell.textContent = "Encerrado";
      statusCell.classList.remove("text-red-400");
      statusCell.classList.add("text-green-400");
      closeDropdowns();
      alert(`Aluguel do carro ID ${carrosAlugados[index].id} encerrado com sucesso.`);
    }

    // Fechar dropdowns ao clicar fora
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown-container')) {
        closeDropdowns();
      }
    });

    function closeDropdowns() {
      document.querySelectorAll('.dropdown-container div').forEach(d => {
        d.classList.add('hidden');
      });
    }


    // Inicializar ícones Lucide
    lucide.createIcons();