import { useNavigate } from "react-router-dom";

import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";

import List from "@mui/joy/List";
import Sheet from "@mui/joy/Sheet";

import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import Button from "@mui/material/Button";
import UnstyledButtonCustom from "components/Button";

const MovieShowing = () => {
  const navigate = useNavigate();
  const { data: movies, isLoading, error } = useRequest(movieAPI.getMovies);
  const goToMovie = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <>
      <div className="d-flex justify-content-center container">
        <div>
          <Sheet
            sx={{
              maxWidth: 1000,
              maxHeight: 700,
            }}
          >
            <div className="row g-1 bg-light p-2 mb-2 rounded-3 border border-warning border-5">
              <div className="col-md">
                <select className="form-select">
                  <option selected>Chọn Phim</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
              <div className="col-md">
                <select className="form-select">
                  <option selected>Chọn Rạp</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
              <div className="col-md">
                <select className="form-select">
                  <option selected>Chọn Lịch Chiếu</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
              <button type="button" class="btn btn-warning fw-bold col-md-2">
                Mua Vé
              </button>
            </div>
          </Sheet>
          <Sheet
            sx={{
              maxWidth: 1000,
              maxHeight: 700,
              overflow: "auto",
            }}
          >
            <List className="bg-light text-dark bg-opacity-50 shadow-lg border border-warning border-5">
              <div className="d-flex flex-wrap justify-content-center">
                {movies?.map((movie) => {
                  return (
                    <Card
                      key={movie.maPhim}
                      sx={{
                        width: 300,
                        bgcolor: "initial",
                        boxShadow: "none",
                        "--Card-padding": "0px",
                      }}
                      className="p-2"
                    >
                      <Box sx={{ position: "relative" }}>
                        <AspectRatio ratio="4/3">
                          <figure>
                            <img
                              srcSet={movie.hinhAnh}
                              loading="lazy"
                              alt="Yosemite by Casey Horner"
                            />
                          </figure>
                        </AspectRatio>
                        <CardCover
                          className="gradient-cover"
                          sx={{
                            "&:hover, &:focus-within": {
                              opacity: 1,
                            },
                            opacity: 0,
                            transition: "0.1s ease-in",
                            background:
                              "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                          }}
                        >
                          <Box>
                            <Box
                              sx={{
                                p: 2,
                                display: "flex",
                                alignItems: "center",
                                gap: 1.5,
                                flexGrow: 1,
                                alignSelf: "flex-end",
                              }}
                            >
                              <Typography
                                level="h2"
                                Wrap
                                sx={{ fontSize: "lg" }}
                              >
                                <Link
                                  href="#dribbble-shot"
                                  underline="none"
                                  sx={{
                                    color: "#fff",
                                    fontWeight: "bold",
                                    textOverflow: "ellipsis",
                                    overflow: "hidden",
                                    display: "block",
                                  }}
                                >
                                  {movie.tenPhim}
                                </Link>
                                {UnstyledButtonCustom(Button)}
                              </Typography>
                            </Box>
                          </Box>
                        </CardCover>
                      </Box>
                    </Card>
                  );
                })}
              </div>
            </List>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default MovieShowing;
