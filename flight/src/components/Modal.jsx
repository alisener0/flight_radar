import React, { useEffect, useState } from "react";
import { detailOpt } from "../constanst";
import Loader from "./Loader";
import axios from "axios";
import formatDate from "../utils/formatDate";
import { setPath } from "../redux/slices/flight";
import { useDispatch } from "react-redux";
import c from "../utils/checkValid";

const Modal = ({ detailId, close }) => {
  const [d, setDetail] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setDetail(null);
    detailOpt.params.flight = detailId;
    axios.request(detailOpt).then((res) => {
      setDetail(res.data);
      dispatch(setPath(res.data.trail));
    });
  }, [detailId]);

  return (
    <div className="modal-outer">
      <div className="modal-inner">
        <div className="close-wrapper">
          <button onClick={close}>X</button>
        </div>
        {!d ? (
          <Loader />
        ) : (
          <>
            <div className="info-wrapper">
              <h2>{c(d.aircraft.model?.text)}</h2>
              <h2>{c(d.aircraft.model?.code)}</h2>

              <p>
                <span>Kuyruk Kodu</span>
                <span>{c(d.aircraft.registration)}</span>
              </p>

              {d.aircraft?.images?.large ? (
                <img src={d.aircraft.images.large[0].src} />
              ) : (
                <p>Fotoğraf Bulunamadı</p>
              )}

              <p>
                <span>Şirket</span>
                <span>{c(d.airline?.name)}</span>
              </p>
              <p>
                <span>Kalkış</span>
                <a target="_blank" href={d.airport?.origin?.website}>
                  {c(d.airport?.origin?.name)}
                </a>
              </p>
              <p>
                <span>Hedef</span>
                <a target="_blank" href={d.airport?.destination?.website}>
                  {c(d.airport?.destination?.name)}
                </a>
              </p>

              <p>
                <span>Kalkış Zamanı</span>
                <span>
                  {d.time.scheduled?.departure
                    ? formatDate(d.time.scheduled?.departure)
                    : "Tarih  Bilinmiyor"}
                </span>
              </p>

              <p>
                <span>İniş Zamanı</span>
                <span>
                  {" "}
                  {d.time.scheduled?.arrival
                    ? formatDate(d.time.scheduled?.arrival)
                    : "Tarih Bilinmiyor"}
                </span>
              </p>
            </div>

            <p className={`alert ${d.status?.icon}`}>
              <span>{c(d.status?.text)}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
