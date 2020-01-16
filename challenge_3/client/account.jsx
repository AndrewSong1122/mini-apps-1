var Account = (props) => (
  <div>
    <form id="accountInfo" action="/address" method="POST">
      <fieldset>
        <legend>Account Info</legend>
        Name: <input type="text" name="accountName"><br>
        Email: <input type="text" name="accountEmail"><br>
        Password: <input type="text" name="accountPassword">
      </fieldset>
    </form>
  </div>
);