import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom/entryFile.js";

let StartFunc = async ({ inFetchResonse }) => {
    let localData = await inFetchResonse.json();
    console.log("aaaaaaaaaaaa : ", localData);

    let localinFetchResonse = localData[0];
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    if (localinFetchResonse.BookingData.OrderData.BranchName == jVarLocalBranchName) {
        StartFuncShowOnDom({ inFetchResonse: localinFetchResonse });
    } else {
        Swal.fire({
            icon: 'question',
            title: 'Not this branch',
            text: `Scan only your branch`
        });
    };
};

export { StartFunc };