<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header-content">
        <div class="logo-area">
          <div class="logo">
            <img src="/images/logo.png" alt="Winery Logo" />
          </div>
        </div>

        <nav class="nav-menu">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/wines">Wines</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>

        <div class="buttons-area">
          <div class="buttons">
            <button>Shop</button>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid #e6e6e6;
  z-index: 1000;
}

.header-wrapper {
  width: min(1400px, calc(100% - 40px));
  margin: 0 auto;
}

.header-content {
  display: grid;
  grid-template-columns: 190px minmax(0, 1fr) 190px;
  align-items: center;
  padding: 10px 0;
  column-gap: 20px;
}

.logo-area {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 0;
}

.logo img {
  height: 80px;
  width: auto;
  display: block;
}

.nav-menu {
  min-width: 0;
  display: flex;
  justify-content: center;
}

.nav-menu ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;
  margin: 0;
  padding: 0;
  flex-wrap: nowrap;
}

.nav-menu a {
  text-decoration: none;
  color: #2e2e2e;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.nav-menu a:hover {
  color: #a67c52;
}

.nav-menu a.router-link-active {
  color: #a67c52;
}

.buttons-area {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 0;
}

.buttons {
  display: flex;
  gap: 15px;
  flex-wrap: nowrap;
}

.buttons button {
  background: transparent;
  border: 1px solid #2e2e2e;
  color: #2e2e2e;
  font-size: 18px;
  padding: 8px 18px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.buttons button:hover {
  background-color: #2e2e2e;
  color: #fff;
}

/* -------------------------------
   LARGE TABLET
-------------------------------- */
@media (max-width: 1200px) {
  .header-wrapper {
    width: min(100%, calc(100% - 32px));
  }

  .header-content {
    grid-template-columns: 150px minmax(0, 1fr) 150px;
    column-gap: 14px;
    padding: 10px 0;
  }

  .logo img {
    height: 66px;
  }

  .nav-menu ul {
    gap: 24px;
  }

  .nav-menu a {
    font-size: 17px;
    letter-spacing: 0.7px;
  }

  .buttons {
    gap: 10px;
  }

  .buttons button {
    font-size: 15px;
    padding: 7px 12px;
    letter-spacing: 0.6px;
  }
}

/* -------------------------------
   TABLET
-------------------------------- */
@media (max-width: 992px) {
  .header-wrapper {
    width: calc(100% - 24px);
  }

  .header-content {
    grid-template-columns: 110px minmax(0, 1fr) 110px;
    column-gap: 10px;
    padding: 8px 0;
  }

  .logo img {
    height: 52px;
  }

  .nav-menu ul {
    gap: 14px;
  }

  .nav-menu a {
    font-size: 14px;
    letter-spacing: 0.4px;
  }

  .buttons {
    gap: 6px;
  }

  .buttons button {
    font-size: 12px;
    padding: 5px 8px;
    letter-spacing: 0.3px;
  }
}

/* -------------------------------
   MOBILE
-------------------------------- */
@media (max-width: 768px) {
  .header-wrapper {
    width: calc(100% - 16px);
  }

  .header-content {
    grid-template-columns: 88px minmax(0, 1fr) 88px;
    column-gap: 8px;
    padding: 7px 0;
  }

  .logo img {
    height: 42px;
  }

  .nav-menu ul {
    gap: 10px;
  }

  .nav-menu a {
    font-size: 12px;
    letter-spacing: 0.2px;
  }

  .buttons {
    gap: 4px;
  }

  .buttons button {
    font-size: 10px;
    padding: 4px 6px;
    letter-spacing: 0.2px;
  }
}

/* -------------------------------
   VERY SMALL MOBILE
-------------------------------- */
@media (max-width: 480px) {
  .header-content {
    grid-template-columns: 76px minmax(0, 1fr) 76px;
    column-gap: 6px;
  }

  .logo img {
    height: 36px;
  }

  .nav-menu ul {
    gap: 8px;
  }

  .nav-menu a {
    font-size: 11px;
    letter-spacing: 0.1px;
  }

  .buttons button {
    font-size: 9px;
    padding: 3px 5px;
    letter-spacing: 0;
  }
}
</style>