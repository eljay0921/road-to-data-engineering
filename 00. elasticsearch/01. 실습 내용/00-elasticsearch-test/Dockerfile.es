# 사용할 Elasticsearch 공식 이미지를 베이스로 지정합니다.
# docker-compose.yaml의 Kibana 버전과 일치시켜주세요.
ARG ELASTIC_VERSION=8.15.0
FROM docker.elastic.co/elasticsearch/elasticsearch:${ELASTIC_VERSION}

# Nori 플러그인 설치
# --batch 옵션으로 사용자 상호작용 없이 설치를 진행합니다.
RUN /usr/share/elasticsearch/bin/elasticsearch-plugin install --batch analysis-nori