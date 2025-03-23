import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@/components/LandingPage/LandingPage";
import NewsFeed from "@/components/NewsFeed/NewsFeed";
import NewsItem from "@/components/NewsItem/NewsItem";
import NotFound from "@/components/NotFound/NotFound";
import ProtectedRoute from "@/routes/ProtectedRoute";
import AuthProvider from "@/contexts/AuthProvider";
import Layout from "@/pages/Layout";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route
              path="news"
              element={
                <ProtectedRoute>
                  <NewsFeed />
                </ProtectedRoute>
              }
            />
            <Route
              path="news/:id"
              element={
                <ProtectedRoute>
                  <NewsItem />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
