import {Collapse,  Tabs } from "antd";
import cinemaAPI from "apis/cinemaAPI";
import useRequest from "hooks/useRequest";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./showtimes.scss";

const Showtimes = ({ movieId }) => {
	const navigate = useNavigate();
	const {
		data: movieDetails,
		
	} = useRequest(() => cinemaAPI.getMovieScheduleDetails());

	const goToTicketRoom = (ticketId) => {
		navigate(`/ticket/${ticketId}`);
	};

	if (movieDetails?.heThongRapChieu.length === 0) {
		return null;
	}

	const { Panel } = Collapse;
	const onChange = (key) => {
		console.log(key);
	};

	return (
		<div id="showtimes" className="showtimes">
			<Tabs
				className="showtimes-desktop"
				defaultActiveKey="1"
				tabPosition="left"
			>
				{movieDetails?.heThongRapChieu.map((cinemaSystem) => {
					return (
						<Tabs.TabPane
							key={cinemaSystem.maHeThongRap}
							tab={
								<div className="showtimes-cinema">
									<div className="showtimes-logo">
										<img
											width={50}
											height={50}
											src={cinemaSystem.logo}
											alt={cinemaSystem.maHeThongRap}
										/>
									</div>
									<div className="showtimes-name-cinema">
										<p>{cinemaSystem.tenHeThongRap}</p>
									</div>
								</div>
							}
						>
							<div className="showtimes-scroll">
								{cinemaSystem.cumRapChieu?.map((cinemaComplex) => {
									return (
										<div
											key={cinemaComplex.maCumRap}
											className="showtimes-complex"
										>
											<h1 className="showtimes-name">
												{cinemaComplex.tenCumRap}
											</h1>
											<div className="showtimes-date">
												{cinemaComplex.lichChieuPhim?.map((dateTime) => {
													return (
														<button
															key={dateTime.maLichChieu}
															onClick={() =>
																goToTicketRoom(dateTime.maLichChieu)
															}
														>
															{moment(dateTime.ngayChieuGioChieu).format(
																"L - hh:mm A"
															)}
														</button>
													);
												})}
											</div>
										</div>
									);
								})}
							</div>
						</Tabs.TabPane>
					);
				})}
			</Tabs>

			<Collapse className="showtimes-mobile" onChange={onChange}>
				{movieDetails?.heThongRapChieu.map((cinemaSystem, index) => {
					return (
						<Panel
							key={index + 1}
							header={
								<div className="showtimes-cinema-mobile">
									<div className="showtimes-logo-mobile">
										<img
											width={50}
											height={50}
											src={cinemaSystem.logo}
											alt={cinemaSystem.maHeThongRap}
										/>
									</div>
									<div className="showtimes-name-cinema-mobile">
										<p>{cinemaSystem.tenHeThongRap}</p>
									</div>
								</div>
							}
						>
							<div className="showtimes-scroll-mobile">
								{cinemaSystem.cumRapChieu?.map((cinemaComplex) => {
									return (
										<div
											key={cinemaComplex.maCumRap}
											className="showtimes-complex-mobile"
										>
											<h1 className="showtimes-name-mobile">
												{cinemaComplex.tenCumRap}
											</h1>
											<div className="showtimes-date-mobile">
												{cinemaComplex.lichChieuPhim?.map((dateTime) => {
													return (
														<button
															key={dateTime.maLichChieu}
															onClick={() =>
																goToTicketRoom(dateTime.maLichChieu)
															}
														>
															{moment(dateTime.ngayChieuGioChieu).format(
																"L - hh:mm A"
															)}
														</button>
													);
												})}
											</div>
										</div>
									);
								})}
							</div>
						</Panel>
					);
				})}
			</Collapse>
		</div>
	);
};

export default Showtimes;
