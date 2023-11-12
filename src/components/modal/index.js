import React from "react";
import "./index.css";

export default function Modal({ isShow, data, onCancel }) {
  return (
    <div className={!isShow ? "hidden" : ""} datacy="modal-delete">
      <div className="modal-bg" onClick={onCancel}></div>
      <div className="modal">
        {data && data.i && data.i.imageUrl ? (
          <img src={data.i.imageUrl} alt="sesuatu" />
        ) : (
          <div>
            <figure>
              <img src="https://cdn.antaranews.com/cache/1200x800/2020/04/18/PSX_20200418_114105.jpg" />
            </figure>
            <p>Image not Found</p>
          </div>
        )}
      </div>
    </div>
  );
}
