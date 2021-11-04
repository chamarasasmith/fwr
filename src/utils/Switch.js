import switchOn from "../assets/switch_on.png";
import switchOff from "../assets/switch_off.png";
import { useEffect, useState } from "react";

export default function Switch({ userID, deviceID, componentid, name, status, isSensor }) {


    const [state, setstate] = useState(status);

    const toggleSwitch = (action) => {

        try {

            const data = {
                deviceId: deviceID,
                actuatorId: componentid?.trim(),
                action: action
            };

            fetch(global.config.baseURL + "/api/v1/device/command", {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {
                    if (data && data.status === "ok") {

                    }
                });

        } catch (error) {
            console.log(error);
        }

    }



    useEffect(() => {

        setInterval(() => {

            if (userID) {
                fetch(global.config.baseURL + "/api/v1/users/customers/" + userID).then((res) => {
                    if (res.ok) {
                        return res.json();
                    }
                    throw res;
                }).then((data) => {

                    data?.Device?.map((item1) => {
                        if (deviceID === (item1?.id)) {
                            return (item1?.Component?.map((item2) => {
                                if ((item2.componentid) === componentid) {

                                    if (item2?.status === "on") {
                                        setstate(true);
                                    } else {
                                        setstate(false);
                                    }

                                }
                                return item2;
                            }));
                        } else {
                            return item1;
                        }
                    });

                }).catch((error) => {
                    console.log(error);
                });
            }
            console.log("Updated Components Data : " + (new Date()));
        }, 3000);

    }, [userID, componentid, deviceID])


    return (
        <div className="card border-2 shadow" style={{ borderRadius: 20 }}>
            <div className="card-body">
                <label className="form-label fs-5">{name}</label>
                <br></br>

                {isSensor ?
                    <img src={state ? switchOn : switchOff} style={{ width: '30%', alignSelf: 'center', opacity: 0.6 }} alt="..." />
                    :
                    <img src={state ? switchOn : switchOff} style={{ width: '30%', alignSelf: 'center', cursor: 'pointer' }} alt="..." onClick={() => { toggleSwitch(state ? 'off' : 'on') }} />
                }
            </div>
        </div>
    );
}

Switch.defaultProps = {
    name: '',
    status: false,
    isSensor: true
}