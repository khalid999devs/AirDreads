FROM python:3.11-slim
WORKDIR /app
RUN pip install --no-cache-dir uv
COPY pyproject.toml ./
RUN uv sync --no-cache
COPY app.py ./app.py
ENV PORT=8080
EXPOSE 8080
CMD ["uv", "run", "gunicorn", "-b", "0.0.0.0:8080", "app:app", "--threads", "4"]
