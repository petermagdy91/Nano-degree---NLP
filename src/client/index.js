export const updateUI = async () => {
  const request = await fetch("http://localhost:2711/all");
  try {
    const allData = await request.json();
    console.log(allData);
  } catch (error) {
    console.log(error);
  }
};
(function() {
  updateUI();
})();
