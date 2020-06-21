const MainContainer = props => (
    <div className="container">
      <div className="outerBox">
        <h1 id="header">MegaMarket Loyalty Cards</h1>
        <TotalsDisplay {...props} />
        <MarketsContainer />
      </div>
    </div>
  );

  export default MainContainer;