import React, { useEffect, useState } from "react";

import { api } from "../../../services/api";
import HeaderPrivate from "../components/HeaderPrivate";
import { SContain, SContainMakeTransaction } from "./styled";

interface ITransactions {
    username: string;
    value: number;
}

interface ITranscationsData {
    value: number;
    date: string;
    id: number;
}

const Transactions: React.FC = () => {
    const [dataTransactions, setDataTransactions] = useState<
        ITranscationsData[]
    >([]);
    const [transaction, setTransaction] = useState<ITransactions>(
        {} as ITransactions
    );

    useEffect(() => {
        api.get("/transaction", {
            headers: { token: localStorage.getItem("token") },
        })
            .then(({ data }) => {
                setDataTransactions(data);
            })
            .catch(() => {});
    }, []);

    return (
        <SContain>
            <HeaderPrivate />
            <SContainMakeTransaction>
                <span>Realizar transações</span>
                <input
                    defaultValue={transaction.username}
                    onChange={e =>
                        setTransaction({
                            ...transaction,
                            username: e.target.value,
                        })
                    }
                />
                <input
                    defaultValue={transaction.value}
                    onChange={e =>
                        setTransaction({
                            ...transaction,
                            value: Number(e.target.value),
                        })
                    }
                    type="number"
                />
                <button type="button">
                    <span>enviar</span>
                </button>
            </SContainMakeTransaction>

            <div>
                {dataTransactions.map((value) => (
                    <div key={value.id}>
                        <span>{value.value}</span>
                        <span>{value.date}</span>
                    </div>
                ))}
            </div>
        </SContain>
    );
};

export default Transactions;
