import React, {useState} from 'react';
import BudgeForm from "./components/BudgeForm";
import Expenses from "./components/Expenses";

function App() {

    const [showBudgeForm, setShowBudgeForm] = useState(true);
    const [totalBudget, setTotalBudget] = useState(0);

    return (
        <div className='container'>
            <header>
                <h1>Expense manager</h1>
            </header>
            <main className='main'>
                {
                    showBudgeForm ? (
                            <BudgeForm
                                setShowBudgeForm={setShowBudgeForm}
                                setTotalBudget={setTotalBudget}
                            />
                        )
                        : (
                            <Expenses
                                totalBudget={totalBudget}
                            />
                        )
                }
            </main>


        </div>
    );
}

export default App;
