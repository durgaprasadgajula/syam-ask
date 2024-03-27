const Header = () => {
  console.log("Header");
  return (
    <nav>
      <ul>
        <li>Logo</li>
        <li>
          <ul>
            <li>Home</li>
            <li>nearer by</li>
            <select>
              <option>Login</option>
              <option>Register</option>
            </select>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
