import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'


function App() {
  return (
    <div id ="app">
      <aside>

    <strong>Cadastrar</strong>

    <form>
      <div class="input-block">
        <label htmlFor="github_userame">Usuário do Github</label>
        <input name="github_userame" id="github_userame" requireds/>
      </div>

      <div class="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input name="techs" id="techs" requireds/>
      </div>
  
      <div className="input-group">
      <div class="input-block">
        <label htmlFor="latitude">Latitude</label>
        <input name="latitude" id="latitude" requireds/>
      </div>

      <div class="input-block">
        <label htmlFor="longitude">Longitude</label>
        <input name="longitude" id="longitude" requireds/>
      </div>

      </div>

      <button type="submit">Salvar</button>
    </form>

      </aside>
      <main></main>
    </div>
    );
}

export default App;
