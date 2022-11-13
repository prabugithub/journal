import './TradeDetails.css';

function TradeDetails() {
    return (
        <div className="TradeDetails mb-3">

            <div class="card mt-3">
                <div class="card-header">
                    Trade Details
                </div>
                <div class="card-body">
                    <form>
                        <div class="row">
                            <div class="col-6">
                                <div class="row">
                                    <label class="form-label col-3" for="timeFrame">Time Frame:</label>
                                    <div class="col-8">
                                        <select name="timeframe" class="form-control" id="timeFrame">
                                            <option>Position</option>
                                            <option>Swing</option>
                                            <option>Intra-day</option>
                                        </select>
                                    </div>
                                </div>
                                <br></br>
                                <div class="row"><label class="form-label col-3">
                                    Transaction type:</label>
                                    <div class="col-8">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="transactionType" value="buy"></input>
                                            <lable class="form-check-label">Buy</lable>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="transactionType" value="sell"></input>
                                            <label class="form-check-label">Sell</label>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <div class="row">
                                    <label class="form-label col-3">Capital:</label>
                                    <div class="col-8">
                                        <input class="form-control" type="number" name='capital'></input>
                                    </div>
                                </div>
                                <br></br>
                                <div class="row">
                                    <label class="form-label col-3">
                                        Risk reward:
                                    </label>
                                    <div class="col-8">
                                        <div class="row">
                                            <div class="col">
                                                <label class="form-label" for="risk">
                                                    Risk
                                                </label>
                                                <input class="form-control" type="number" name="risk" id="risk"></input>

                                            </div>
                                            <div class="col">
                                                <label class="form-label" for="rrewardisk">
                                                    Reward
                                                </label>
                                                <input class="form-control" type="number" name="reward"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <label class="form-label col-3">
                                        Strategy:
                                    </label>
                                    <div class="col-8">
                                        <select name="strategy" class="form-select">
                                            <option>Select one</option>
                                            <option>MA/B</option>
                                            <option>Central Pivot</option>
                                            <option>BTST</option>
                                            <option>Support</option>
                                            <option>Ressistance</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <label class="form-label col-3">
                                        Instrument type:
                                    </label>
                                    <div class="col-8">
                                        <div class="row">
                                            <div class="col">
                                                <div class="form-check">
                                                    <label class="form-label-check" >
                                                        <input type="radio" name="instrumentType" value='eqity'></input> Equity
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-label-check">
                                                        <input type="radio" name="instrumentType" value='crude'></input> Crude
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-check">
                                                    <label class="form-label-check">
                                                        <input type="radio" name="instrumentType" value='feature'></input> Feature
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-label-check">
                                                        <input type="radio" name="instrumentType" value='option'></input> Option
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="row">
                                    <label class="form-label col-3">
                                        Trade quantity:
                                    </label>
                                    <div class="col-8">
                                        <div class="row">
                                            <div class="col">
                                                Quantity<input class="form-control" name="quantity"></input>
                                            </div>
                                            <div class="col">
                                                Amount<input class="form-control" name="amount"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <div class="row">
                                    <label class="form-label col-3">
                                        Stock Name:
                                    </label>
                                    <div class="col-8">
                                        <input class="form-control" type="text" name="stockName"></input>

                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <label class="form-label col-3">
                                        Trade date:
                                    </label>
                                    <div class="col-8">
                                        <div class="row">
                                            <div class="col-6">
                                                Entry <input class="form-control" type="date" name="entryTime"></input>
                                            </div>
                                            <div class="col-6">
                                                Exit <input class="form-control" type="date" name="exitTime"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <div class="row">
                                    <label class="form-label col-3">
                                        Trade result:
                                    </label>
                                    <div class="col-8">
                                        <div class="row">
                                            <div class="col">
                                                <div class="form-check">
                                                    <input name='tradeResult' type="radio" value="target"></input>
                                                    <label class="form-label">Target</label>
                                                </div>
                                                <div class="form-check">
                                                    <input name='tradeResult' type="radio" value="stop"></input>
                                                    <label class="form-label">Stop Loss</label>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-check">
                                                    <input name='tradeResult' type="radio" value="terminate"></input>
                                                    <label class="form-label">Terminate</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <div class="row">
                                    <label class="form-label col-3">
                                        Description:
                                    </label>
                                    <div class="col-8">
                                        <input class="form-control" type="textarea" name="description"></input>
                                    </div>
                                </div>

                                <br />
                                <div class="row">
                                    <label class="form-label col-3">
                                        Screenshot:
                                    </label>
                                    <div class="col-8">
                                        <input class="form-control" type="file" name="screenshot"></input>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <br />

                        <button type="button" class="btn btn-primary">Submit</button>
                        <button type="button" class="btn btn-secondary ms-3">Clear</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default TradeDetails;