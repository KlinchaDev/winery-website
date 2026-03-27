<template>
  <header class="header">
    <div class="w-7xl m-auto">
      <div class="header-content">
        <div class="logo">
          <img src="/images/logo.png" alt="Winery Logo" />
        </div>

        <nav class="nav-menu">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/wines">Wines</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>

        <div class="buttons">
          <button>Shop</button>
          <button>Login</button>
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

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}

.logo img {
  height: 80px;
  width: auto;
}

/* Centered navigation menu */
.nav-menu {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-menu ul {
  list-style: none;
  display: flex;
  gap: 45px;
  margin: 0;
  padding: 0;
}

.nav-menu a {
  text-decoration: none;
  color: #2e2e2e;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.nav-menu a:hover {
  color: #a67c52;
}

/* optional active link */
.nav-menu a.router-link-active {
  color: #a67c52;
}

/* Shop / Login buttons */
.buttons {
  display: flex;
  gap: 15px;
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
}

.buttons button:hover {
  background-color: #2e2e2e;
  color: #fff;
}

/* Responsive tweaks */
@media (max-width: 992px) {
  .header-content {
    flex-direction: column;
    gap: 20px;
  }

  .nav-menu ul {
    gap: 25px;
  }

  .logo img {
    height: 20px;
  }
}
</style>