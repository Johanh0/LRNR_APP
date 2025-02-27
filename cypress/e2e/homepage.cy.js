describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/"); // Visit the homepage
  });

  it("displays the logo", () => {
    cy.get("img").should("be.visible");
  });

  it("displays the correct tagline", () => {
    cy.contains("Your guided path to programming enlightnment").should(
      "be.visible"
    );
  });

  it("displays the BEGIN JOURNEY button", () => {
    cy.contains("BEGIN JOURNEY").should("be.visible");
  });

  it("navigates to quiz generation page when clicking BEGIN JOURNEY", () => {
    cy.contains("BEGIN JOURNEY").click();
    cy.url().should("include", "/quiz-gen");
  });
});
