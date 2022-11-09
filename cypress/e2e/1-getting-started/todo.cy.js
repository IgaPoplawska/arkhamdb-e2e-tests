describe("arkhamdb smoke tests", () => {
  beforeEach(() => {
    cy.visit("https://arkhamdb.com/");
  });

  it("should render basic home page sections", () => {
    cy.get(".site-title").should("have.text", "ArkhamDB");
    cy.get(".site-slogan").should(
      "have.text",
      "Deckbuilder and Card Database for the Arkham Horror LCG"
    );
    cy.get(".bg-faction").eq(0).should("exist");
    cy.get(".bg-faction").eq(0).find("a").should("exist");
    cy.get("nav .navbar-brand").should("have.attr", "href", "/");
    cy.get("nav .navbar-form input").type("hehe");
    cy.get("nav .navbar-form input").should("have.value", "hehe");
  });
  it("should API work correctly", () => {
    cy.request("/").debug();
    cy.request("/").then((resp) => {
      expect(resp.status).to.eq(200);
      console.log(resp);
    });
  });
});
