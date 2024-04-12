const Home = () => {
  return (
    <form onSubmit={handleSubmit}>
       <label>
              Name:
              <input type="text" name="name" />
            </label>
            <br></br>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <button type="submit">Submit</button>
    </form>
  );
};

export default Home;
