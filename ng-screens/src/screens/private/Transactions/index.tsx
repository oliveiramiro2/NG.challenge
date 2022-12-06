import React, { useEffect, useState, useContext } from "react";
import moment from "moment";
import { Store } from "react-notifications-component";

import { api } from "../../../services/api";
import HeaderPrivate from "../components/HeaderPrivate";
import {
    SContain,
    SContainMakeTransaction,
    SContainTransactions,
    SContainTransactionCard,
} from "./styled";
import { AuthContext } from "../../../services/auth";

interface ITransactions {
    username: string;
    value: number;
}

interface ITranscationsData {
    value: number;
    create_at: string;
    id: number;
}

const Transactions: React.FC = () => {
    const [dataTransactions, setDataTransactions] = useState<
        ITranscationsData[]
    >([]);
    const [transaction, setTransaction] = useState<ITransactions>(
        {} as ITransactions
    );
    const [dataRecovered, setDataRecovered] = useState<boolean>(false);
    const { userData } = useContext(AuthContext);

    const alertMessage = (msg: string, type: string) => {
        const typeOfAlert = type === "danger" ? "danger" : "success";
        Store.addNotification({
            message: `${msg}`,
            type: `${typeOfAlert}`,
            container: "center",
            insert: "top",
            animationIn: ["animate__animated", "animate__zoomIn"],
            animationOut: ["animate__animated", "animate__zoomOut"],
            dismiss: {
                duration: 5000,
                onScreen: true,
            },
        });
    };

    const makeRequest: Function = () => {
        api.get("/transaction", {
            headers: { token: localStorage.getItem("token") },
        })
            .then(({ data }) => {
                setDataTransactions(data);
                setDataRecovered(true);
            })
            .catch(() => {
                alertMessage(
                    "Desculpe, não foi possível encontrar suas transferências.",
                    "danger"
                );
            });
    };

    useEffect(() => {
        document.title = "NG challenge - Transações";

        if (!dataRecovered) {
            makeRequest();
        }
    }, []);

    const sendData: Function = () => {
        if (
            transaction.username.length < 3 ||
            transaction.username === userData.username
        ) {
            alertMessage(
                "O nome de usuário contém no mínimo 3 letras e você não pode transferir dinheiro para si mesmo.",
                "danger"
            );
            return;
        }

        const dataSend = {
            value: transaction.value,
            username: transaction.username,
        };

        api.post("/transaction", dataSend, {
            headers: { token: localStorage.getItem("token") },
        })
            .then(() => {
                alertMessage("Transferência realizada com sucesso!", "success");
                setDataTransactions([]);
                makeRequest();
            })
            .catch(() => {
                alertMessage(
                    "Desculpe, não foi possível encontrar o usuário informado.",
                    "danger"
                );
            });
    };

    return (
        <SContain>
            <HeaderPrivate />
            <SContainMakeTransaction>
                <span>Realizar transações</span>
                <div>
                    <strong>Nome de usuário</strong>
                    <input
                        defaultValue={transaction.username}
                        onChange={e =>
                            setTransaction({
                                ...transaction,
                                username: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <strong>Valor</strong>
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
                </div>
                <button type="button" onClick={() => sendData()}>
                    <span>Enviar</span>
                </button>
            </SContainMakeTransaction>

            <SContainTransactions>
                <p>Transações realizadas</p>
                <article>
                    {dataTransactions.map(value => (
                        <SContainTransactionCard key={value.id}>
                            <strong>
                                {value.value < 0 ? "Debitado" : "Creditado"}
                            </strong>
                            <span>
                                {"\n"}Valor: {value.value}
                            </span>
                            <span>
                                Data: {moment(value.create_at).format("L")}
                            </span>
                        </SContainTransactionCard>
                    ))}
                </article>
            </SContainTransactions>
        </SContain>
    );
};

export default Transactions;
